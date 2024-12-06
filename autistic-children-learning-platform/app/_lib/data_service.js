import { supabase } from "./supabase";

export async function existingUser(email) {
  const { data, error } = await supabase
    .from("children")
    .select("*")
    .eq("email", email)
    .single();
  return data;
}

export async function createChild({ email, fullName }) {
  const { data, error } = await supabase.from("children").insert([
    {
      email,
      fullName,
    },
  ]);
  return data;
}

export async function getAge(email) {
  const { data, error } = await supabase
    .from("children")
    .select("age")
    .eq("email", email)
    .single();
  return data;
}

export async function saveExpression(key, value) {
  const { data, error } = await supabase
    .from('expressions')
    .insert([{ key, value }]);

  if (error) {
    console.error('Error saving expression:', error);
    return null;
  }

  return data;
}