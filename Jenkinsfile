pipeline{
    agent any 
    environment{
        DOCKER_IMAGE = "sasibk/weather-app"
    }

    stages{
        stage('Code Checkout'){
            steps{
                git branch: 'main', url: 'https://github.com/sasibeeke/react-weather-app.git'
            }
        }
        stage('Build the Code'){
            steps{
                 sh 'docker build -t $DOCKER_IMAGE .'   
            }
        }

        stage('Login to DockerHub'){
            steps{
                withCredentials([usernamePassword(credentialsId:'dockerHub', usernameVariable:'DOCKERHUB_USER', passwordVariable:'DOCKERHUB_PASS')]){
                    sh "echo $DOCKERHUB_PASS | docker login -u $DOCKERHUB_USER --password-stdin"
                }
            }
        }

        stage('Push to Dockerhub'){
            steps{
                sh "docker push $DOCKER_IMAGE"
            }
        }

    } 

}