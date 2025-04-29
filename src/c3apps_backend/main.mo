// src/c3apps_backend/main.mo

import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Principal "mo:base/Principal";
import Result "mo:base/Result";

actor {
  type User = {
    email: Text;
    passwordHash: Text;
    role: Text;
  };

  // Simpan user dengan Principal sebagai key
  private stable var usersEntries : [(Principal, User)] = [];
  private var users = HashMap.HashMap<Principal, User>(0, Principal.equal, Principal.hash);

  // Simpan email ke Principal mapping untuk lookup
  private stable var emailEntries : [(Text, Principal)] = [];
  private var emailToPrincipal = HashMap.HashMap<Text, Principal>(0, Text.equal, Text.hash);

  system func preupgrade() {
    usersEntries := Iter.toArray(users.entries());
    emailEntries := Iter.toArray(emailToPrincipal.entries());
  };

  system func postupgrade() {
    users := HashMap.fromIter<Principal, User>(Iter.fromArray(usersEntries), 0, Principal.equal, Principal.hash);
    emailToPrincipal := HashMap.fromIter<Text, Principal>(Iter.fromArray(emailEntries), 0, Text.equal, Text.hash);
    usersEntries := [];
    emailEntries := [];
  };

  // Daftarkan user baru
  public shared(msg) func register(email: Text, passwordHash: Text, role: Text) : async Result.Result<Text, Text> {
    let caller = msg.caller;

    // Periksa apakah email sudah digunakan
    switch (emailToPrincipal.get(email)) {
      case (null) {
        // Email belum digunakan, daftarkan user baru
        let newUser : User = {
          email = email;
          passwordHash = passwordHash;
          role = role;
        };

        users.put(caller, newUser);
        emailToPrincipal.put(email, caller);
        return #ok("Registration successful");
      };
      case (?_) {
        return #err("Email already registered");
      };
    };
  };

  // Login user - mengubah menjadi shared func
  public shared func login(email: Text, passwordHash: Text) : async Result.Result<{role: Text}, Text> {
    switch (emailToPrincipal.get(email)) {
      case (null) {
        return #err("User not found");
      };
      case (?principal) {
        switch (users.get(principal)) {
          case (null) {
            return #err("User not found");
          };
          case (?user) {
            if (user.passwordHash == passwordHash) {
              return #ok({role = user.role});
            } else {
              return #err("Invalid credentials");
            };
          };
        };
      };
    };
  };

  // Fungsi tambahan untuk mengecek apakah email sudah terdaftar
  public query func checkEmailExists(email: Text) : async Bool {
    switch (emailToPrincipal.get(email)) {
      case (null) { return false; };
      case (?_) { return true; };
    };
  };

  // Ambil data user (untuk testing)
  public shared(msg) func getOwnProfile() : async Result.Result<User, Text> {
    let caller = msg.caller;
    switch (users.get(caller)) {
      case (null) { return #err("User not found"); };
      case (?user) { return #ok(user); };
    };
  };
}