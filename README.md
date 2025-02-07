# Syntegra

## Architecture
1. Backend (Go)
2. Frontend (React)
3. PostgreSQL

## Features
* User registration/login
* Project creation/edit
* Project user invites
* Service creation/edit
* Endpoint creation/edit
* Checking endpoints done

## Average-case scenario
### User A
1. Registration
2. Project creation
3. Editing project description
4. Inviting user
5. Editing user rights
6. Creating auth scheme
7. Creating service "Users"
8. Creating endpoint "/users/registration"
    - Adding some details
    - Assign user, who must done this

### User B
1. Registration
2. Invite accepting
3. Viewing all endpoints, list of assigned
4. Submit completion progress (in order, in work, done)