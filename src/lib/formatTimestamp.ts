export function formatTimestamp(isoString: string): string {
    const date = new Date(isoString);
  
    // Format: March 15, 2024, 2:30 PM
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
}