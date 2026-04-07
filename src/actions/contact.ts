"use server";

import { supabase } from "@/lib/supabase";

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const service = formData.get("service") as string;
  const details = formData.get("details") as string;

  if (!supabase) {
    throw new Error("Supabase client not initialized. Check your environment variables.");
  }

  const { error } = await supabase.from("contacts").insert([
    {
      first_name: firstName,
      last_name: lastName,
      email: email,
      service_requested: service,
      project_details: details,
    },
  ]);

  if (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
