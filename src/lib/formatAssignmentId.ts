export function formatAssignmentId(id: string): string {
    return id
        .split('_')                   // ["brooklyn", "brewery"]
        .map(word => 
            word.charAt(0).toUpperCase() + word.slice(1) // "Brooklyn", "Brewery"
        )
        .join(' ');                   // "Brooklyn Brewery"
}
  