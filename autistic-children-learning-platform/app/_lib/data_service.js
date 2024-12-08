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

export async function getExpressions() {
  const { data, error } = await supabase.from("expressions").select("*");

  if (error) {
    console.error("Error getting expressions:", error);
    return null;
  }

  return data;
}

export async function saveTopExpressions(email, topExpressions){
  const { data, error } = await supabase.from("children").upsert([
    {
      email,
      topExpressions,
    },
  ]);
  if (error) {
    console.error("Error saving top expressions:", error);
    return null;
  }
  return data;
}

export async function calculateTopExpressions(email) {
  // Fetch all expressions
  const expressions = await getExpressions();

  if (!expressions || expressions.length === 0) {
    console.log("No expressions found");
    return;
  }

  // Count frequency of each expression
  const frequencyMap = {};
  expressions.forEach(({ value }) => {
    frequencyMap[value] = (frequencyMap[value] || 0) + 1;
  });

  // Sort expressions by frequency
  const sortedExpressions = Object.entries(frequencyMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([expression]) => expression);

  // Save top three expressions to the database
  await saveTopExpressions(email, sortedExpressions);
}