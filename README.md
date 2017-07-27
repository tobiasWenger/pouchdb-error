# pouchdb-error

This repo produces an error after saving and deleting a hasMany model.

- create post
- transition to post
- click on "doStuff" -> see error in console (Assertion Failed: Cannot call writableTag after the object is destroyed)
- click on "doStuffWithDelay" -> no error

important code is in the post controller. I think I'm doing something conceptionally wrong but I don't know where to start debugging.