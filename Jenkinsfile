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
                sh "pwd"

                dir("application") {
                    sh "npm install" 
                }
            }
        }

        stage("Testing") {
            steps {
                sh "pwd"

                dir("application") {
                    sh "npm run test" 
                }
            }
        }

        // stage("Start") {
        //     steps {
        //         sh 'npm start'
        //     }
        // }

        // stage("Deploy") {
        //     steps {
        //         echo "========== Deploying application =========="
        //     }
            
    }
}