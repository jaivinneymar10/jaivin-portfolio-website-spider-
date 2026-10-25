import { profile, projects, skillGroups } from "../data/portfolio";

const normalize = (value = "") =>
  value.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, " ").trim();

export function processVoiceCommand(rawTranscript) {
  const input = normalize(rawTranscript);
  if (!input) return null;

  if (/(^|\b)(hi|hello|hey|good morning|good afternoon|good evening)(\b|$)/.test(input)) {
    return { text: `Hello! I’m the portfolio assistant for ${profile.name}. You can ask about projects, skills, or contact details.`, action: null };
  }

  if (input.includes("help") || input.includes("what can you do")) {
    return {
      text: "Try: about Jaivin, show skills, open projects, inspect school website, inspect CRM dashboard, inspect AI cooking assistant, contact, switch theme, or play music.",
      action: null,
    };
  }

  if (input.includes("switch theme") || input.includes("change theme") || input.includes("toggle theme")) {
    return { text: "Switching the portfolio visual theme.", action: { type: "theme", payload: "toggle" } };
  }

  if (input.includes("play music") || input.includes("start music")) {
    return { text: "Toggling the background audio.", action: { type: "music", payload: "toggle" } };
  }

  if (input.includes("stop music") || input.includes("pause music")) {
    return { text: "Stopping background audio.", action: { type: "music", payload: "stop" } };
  }

  if (input.includes("about") || input.includes("who is jaivin") || input.includes("about jaivin")) {
    return { text: `${profile.name} is a ${profile.role}. ${profile.summary}`, action: { type: "navigate", payload: "/about" } };
  }

  if (input.includes("skill") || input.includes("technology") || input.includes("tech stack")) {
    const allSkills = skillGroups.map((group) => `${group.title}: ${group.items.join(", ")}`).join(". ");
    return { text: `Here is the current toolkit. ${allSkills}`, action: { type: "navigate", payload: "/skills" } };
  }

  const matchedProject = projects.find((project) =>
    input.includes(normalize(project.title)) ||
    (project.id === "school-website" && input.includes("school website")) ||
    (project.id === "crm-dashboard" && input.includes("crm")) ||
    (project.id === "ai-cooking-assistant" && (input.includes("cooking") || input.includes("recipe")))
  );

  if (matchedProject && (input.includes("inspect") || input.includes("open") || input.includes("project") || input.includes("show"))) {
    return {
      text: `${matchedProject.title}: ${matchedProject.shortDescription}`,
      action: { type: "modal", payload: matchedProject.id },
    };
  }

  if (input.includes("project") || input.includes("portfolio work")) {
    return { text: `There are ${projects.length} featured projects: ${projects.map((project) => project.title).join(", ")}.`, action: { type: "navigate", payload: "/projects" } };
  }

  if (input.includes("contact") || input.includes("email") || input.includes("hire")) {
    return { text: `You can reach ${profile.name} at ${profile.email}. Opening the contact section.`, action: { type: "navigate", payload: "/contact" } };
  }

  if (input.includes("who am i") || input.includes("whoami")) {
    return { text: `${profile.name} — ${profile.role}. ${profile.summary}`, action: null };
  }

  return {
    text: `I didn’t find a command for “${rawTranscript}”. Try “help”, “about Jaivin”, “show skills”, “open projects”, or “contact”.`,
    action: null,
  };
}
