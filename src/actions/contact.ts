"use server";

import { createClient } from "@/lib/supabase/supabase-server-client";

export async function submitContactMessage(formData: FormData) {
  try {
    const supabase = await createClient();
    const fullName = formData.get("fullName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const subject = formData.get("subject")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    // Basic validation
    if (!fullName || !email || !subject || !message) {
      return { success: false, error: "All fields are required." };
    }

    const { error } = await supabase
      .from("contact_messages")
      .insert([
        {
          full_name: fullName,
          email,
          subject,
          message,
        },
      ]);

    if (error) {
      console.error("Supabase error (Contact):", error);
      return { success: false, error: "Failed to send message. Please try again later." };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Server Action Error (Contact):", err);
    return { success: false, error: "An unexpected error occurred." };
  }
}
