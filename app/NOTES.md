CONCERNS
- to bypass CORS issues when requesting entries I just added a wildcard to cors.rb. I need to send permission via some headers but i'm not sure where. see this blog. installed middleware but it didnt make a difference. 
https://medium.com/@Nicholson85/handling-cors-issues-in-your-rails-api-120dfbcb8a24. Files that I believe need modifying are 
    -cors.rb
    -application.rb

- controller actions
    - currently they are /redirecting to page views. we don't want to do this....rather we want to render json that contains information we can use to set state. 
    -example flow for signing up new user 
        -new user fills in form on react front end
        - we make a post request to users/ (which routes them to users#create action)
        - the create action saves info to database and sends JSON info back to react front end REDUCER
        - here we would dispatch an action such as {type: LOGIN, with data} . We set the state user_id to use in that reducer action
        - the final step in the action would me redirect with a push action from react-router-redux. see resource (https://stackoverflow.com/questions/35706835/react-router-redirect-after-action-redux)
        
    - we will never user NEW controller action because we aren't rendering and forms from api. we will use create, update, and delete   actions tho

- will we even need sessions controller? yes--to send/assign user to state. 

USEFUL REFERENCES
    -how to use react-router (https://reacttraining.com/react-router/)


HOW TO BUILD OUT THIS APP
    -give priority to FUNCTION and PROJECT REQUIREMENTS FIRST
    -Do NOT build out spotify connectivity until minimum requirements met first
    -before beginning each nugget - identify a goal - based on requirements
    - styling last -- and integrate react-bootstrap before trying to write CSS from scratch


REQUIREMENTS
    - 2 container components
        -entries container
        -welcome container
    - 5 stateless components
        - entry
        - entryInput
        - entryList
        - LoginInput
        - about/welcome
    - 3 Routes
        - '/'
        - '/entries' 
        - '/entries/:entryId'



        Goals (for nuggets) on 3/20
            -create users table and model and modify entries to include user_id. modify seed data
            -build login input form (login with credentials--not oauth)
            -build login action


