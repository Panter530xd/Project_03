 export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: { [key: string]: any }; // The data expected to be returned from a "select" statement.
        Insert: { [key: string]: any }; // The data expected passed to an "insert" statement.
        Update: { [key: string]: any }; // The data expected passed to an "update" statement.
      }
    }
  }
}

export type Profiles = Database["public"]["Tables"]["profiles"]["Row"];
