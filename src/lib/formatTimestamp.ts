export function formatTimestamp(isoString: string): string {
    const date = new Date(isoString);
  
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
}