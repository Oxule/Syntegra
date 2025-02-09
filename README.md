# Syntegra

## Architecture
1. Backend (Go)
2. Frontend (React)
3. PostgreSQL

## Access
* Just pre-defined in config login/password combinations
* In fact, everyone WILL be trusted people

## Average-case scenario
### User A
1. Login
2. Project creation
3. Editing project info
4. Inviting user by username(instant)
5. See all invited users
6. Kick user
7. Creating service
8. Editing service
9. Deleting service
10. Creating endpoint
11. Editing endpoint
12. Assigning/Discharge endpoint to user
12. Deleting endpoint

### User B
1. Login
2. List all project (self-made/invited)
3. Viewing all endpoints, list of assigned
4. Submit completion progress (in order, in work, done)

## Db scheme
*UUID on every entity*
### User
* Username
* Password
* MyProjects
* MemberProjects

### ProjectMember
* User
* Project

### Project
* Creator
* Members
* Schemes
* Endpoints
* CreatedAt

### Scheme
* Type (**Structure**, Service[Tag], Auth, etc.)
* Name
* Details (JSON)

### Endpoint
* Hash
* Route
* Method
* JsonDetails
* Progress

### EndpointProgress
* Endpoint
* AssignedUser
* State