"use server";

import { createClient } from "@/lib/supabase/supabase-server-client";

export async function subscribeNewsletter(formData: FormData) {
  try {
    const supabase = await createClient();
    const email = formData.get("email")?.toString() || "";

    if (!email || !email.includes("@")) {
      return { success: false, error: "Please provide a valid email address." };
    }

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([
        {
          email,
        },
      ]);

    if (error) {
      console.error("Supabase error (Newsletter):", error);
      // Commonly, unique violation means they are already subscribed
      if (error.code === '23505') {
         return { success: false, error: "You are already subscribed to the newsletter!" };
      }
      return { success: false, error: "Failed to join network. Please try again later." };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Server Action Error (Newsletter):", err);
    return { success: false, error: "An unexpected error occurred." };
  }
}
