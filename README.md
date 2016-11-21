Educational Video Activity Example
==================================

The following is a simple application that shows an educational video activity.  The application begins by asking for a username and user information.  After which it will send the user to one of three different presentation modes for this activity, having them watch the video and answer several questions regarding the content of the video.

Activity about the video is recorded for each user, including when they started the video, pauses, finishing the video, and if/when they restart it.  All answers to questions are recorded as well, along with the historical actions of which answers were selected and when.  This allows for a potential timeline of the users actions to be re-created.  Each mode represents a different way the end user interacts with the activity so recording this data can provide better insight into how each user interacts with the final result.  For example, if a user were to watch the video, pause it to answer a question, then resume watching it we would know they are actively watching and considering the questions while interacting.

Note: all results are stored in local storage and persisted.

**To run, follow these steps:**

1. Install dependencies with `npm install` in this directory (make sure it creates a local node_modules)
2. Start build with `npm start`
3. Open [http://localhost:3000/](http://localhost:3000/) in your browser (it should do this for you with the above command)


**For demo purposes:**
Once logged in, you can view all 3 presentation modes by navigating to the following:
* [Mode 1](http://localhost:3000/watch/1)
* [Mode 2](http://localhost:3000/watch/2)
* [Mode 3](http://localhost:3000/watch/3)

Project base setup based on [react-redux-router basic example](https://github.com/reactjs/react-router-redux/tree/master/examples/basic) project.

