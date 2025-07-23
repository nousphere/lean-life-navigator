export interface Category {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Program {
  id: string;
  category_id: string;
  name: string;
  description: string;
  website_url: string;
  monthly_price?: number;
  features: string[];
  pros: string[];
  cons: string[];
  support_type: string;
  diet_type: string;
  exercise_requirement: string;
  time_commitment: string;
  best_for: string[];
  not_suitable_for: string[];
  created_at: string;
  updated_at: string;
  category?: Category;
}

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: Category;
        Insert: Omit<Category, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Category, 'id' | 'created_at' | 'updated_at'>>;
      };
      programs: {
        Row: Program;
        Insert: Omit<Program, 'id' | 'created_at' | 'updated_at' | 'category'>;
        Update: Partial<Omit<Program, 'id' | 'created_at' | 'updated_at' | 'category'>>;
      };
    };
  };
}