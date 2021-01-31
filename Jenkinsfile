pipeline{
    agent any
    tools {
        nodejs 'default-nodejs'
    }
    stages {

        stage("Build") { 
            echo "========== Running build =========="
            steps {
                script {
                    sh "npm install"
                }
            }
        }

        stage("Test") {
            steps {
                echo "========== Running tests =========="

                script {
                    sh "npm run test"
                }
            }
        }

        stage("Start"){
            steps {
                echo "========== Running start =========="

                script {
                    sh 'npm start'
                }
            }
        }

        stage("deploy") {
            steps {
                echo "========== Deploying application =========="
            }
            
        }
    }
}