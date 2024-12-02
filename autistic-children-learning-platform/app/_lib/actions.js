"use server";

import { signIn, signOut, auth } from "./auth";
//import { getBookings } from "./data-service";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function addAgeAction(formData) {
  const session = await auth();

  console.log(session.user.name);
  try {
    await supabase
      .from("children")
      .update({ age: formData.get("age") })
      .eq("email", session.user.email);

    revalidatePath("/account");
  } catch {
    console.log("error");
  }
}
