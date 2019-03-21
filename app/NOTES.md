CONCERNS
- to bypass CORS issues when requesting entries I just added a wildcard to cors.rb. I need to send permission via some headers but i'm not sure where. see this blog. installed middleware but it didnt make a difference. 
https://medium.com/@Nicholson85/handling-cors-issues-in-your-rails-api-120dfbcb8a24. Files that I believe need modifying are 
    -cors.rb
    -application.rb

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
            -build login input form
            -build login action

