export {}

// Create a type for the roles
export type Roles = 'kawou_promptpro' | 'moderator'

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    }
  }
}