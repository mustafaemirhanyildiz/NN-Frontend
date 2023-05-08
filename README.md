1.1 Project Abstract
Our project is converting funny tweets collected from Twitter into videos in a specific format and these videos are being published on various social media platforms in order to generate passive income. To collect tweets from the Twitter social media, the twitter API technology, which is free of charge for developers, provided by the Twitter company is used. After tweets are collected from social media through this API, they undergo certain processes and are sent to an artificial neural network model. Based on the results obtained from this model, tweets that are identified as funny are added to the database. Later, when the user wants to create a video through the web interface, a video is created in which tweets are displayed one after the other, with a maximum of 10 tweets. At the same time, when the user enters a sentence on the web interface, the system determines whether it is funny or not and provides the result to the user both visually and in writing.

1.2 Project Development Process
During the development process of the project, as we carried out the project as a team of 2 people, we initially divided the tasks. The things that were necessary for our project were
Twitter Api
Fast Api with Python
Web Interface
Database
Artifical Neural Network Model
By using these technologies, the goal is to create a project as stated in item 1.1.
1.2.1 Twitter Api
In order to use the free API provided by Twitter company, we had to go through some steps. Here, we obtained information about these steps through documentation and educational videos on Youtube, and we created a Twitter API account that we can pull 2,000,000 tweets with by doing the necessary procedures. This number was sufficient for both testing and product development. With this, we were able to perform our tests as we wanted and we achieved the best results.
1.2.2 Fast Api with Python
In order to perform the operations on the web interface, it was necessary to have a REST API that would perform database operations, such as pulling tweets and placing them in the artificial intelligence model in the background. Here, the necessary methods were written and the desired data was transferred on the web interface side.
1.2.3 Web Interface
HTML, CSS, JavaScript were used in the web interface part. The designs were carried out with attention to the interface being beautiful and user-friendly. A very user-friendly interface was designed, both in terms of the opening screen and in terms of visually informing the user whether the sentence is funny or not.
1.2.4 Database
MySQL was decided to be used as the database. There is not much load in the database section of the project. There is 1 tweet table and funny tweets are pulled from here to create videos.
1.2.5 Artifical Neural Network Model
An artificial neural network that has been trained on a large dataset is used to determine whether tweets collected from Twitter are funny or not. Our model's success rate has been determined to be approximately 91.54% on test data.

1.3 Experience
There are many experiences gained during the development process of the project. Firstly, we used Twitter Api technology provided by Twitter for the first time and learned how to use it. We gained experience in what steps we needed to go through for this. We also gained experience in working as a team of 2 people and in task sharing. By training our own artificial neural network model, we increased our knowledge in this area by working on parameters such as the number of layers and depth, the size and accuracy of the training-test data.

1.4 Final Result
As a result of the project, tweets are pulled from Twitter and passed through an artificial intelligence model to determine which are funny and add them to the database. When the user wants to create a video, the video is created using these funny tweets. Additionally, users can test on the interface whether a sentence is funny or not, and this is visually reported to the user.
![image](https://user-images.githubusercontent.com/92929045/236858802-755260f3-538b-4d20-baa4-2c18110501e2.png)

