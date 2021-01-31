pipeline{
    agent any

    tools {
        nodejs 'node'
    }

    stages {

        stage("Clone Repository") {
            steps {
                git 'https://github.com/pedroschmid/Pipeline.git'
            }
        }

        stage("Install Dependencies") { 
            steps {
                dir("application") {
                    sh "npm install" 
                }
            }
        }

        stage("Testing") {
            steps {
                dir("application") {
                    sh "npm run test" 
                }
            }
        }   
    }
}