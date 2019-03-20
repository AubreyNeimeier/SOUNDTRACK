CONCERNS
- to bypass CORS issues when requesting entries I just added a wildcard to cors.rb. I need to send permission via some headers but i'm not sure where. see this blog. installed middleware but it didnt make a difference. 
https://medium.com/@Nicholson85/handling-cors-issues-in-your-rails-api-120dfbcb8a24. Files that I believe need modifying are 
    -cors.rb
    -application.rb
    