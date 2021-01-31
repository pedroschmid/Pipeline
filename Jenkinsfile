pipeline{
    agent any
    tools {
        nodejs 'default-nodejs'
    }
    stages {

        stage("Build") { 
            steps {
                script {
                    sh "npm install"
                }
            }
        }

        stage("Test") {
            steps {
                script {
                    sh "npm run test"
                }
            }
        }

        stage("Build"){
            steps {
                script {
                    sh 'npm start'
                }
            }
        }

        // stage("deploy") {
            
        // }
    }
}