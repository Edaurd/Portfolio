import React, { useState } from "react";
import emailjs, { init } from "emailjs-com";

// Replace with your EmailJS account's sender email, template ID, and user ID
const SENDER_EMAIL = "your-email@example.com";
const TEMPLATE_ID = "template_0jxieew";
const USER_ID = "yaXBT1fCWtR1RiCSu";

init("yaXBT1fCWtR1RiCSu", "7fkMM_4DKDWTVRhO4DmmU"); // Initialize EmailJS with your API key
