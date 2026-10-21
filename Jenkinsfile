pipeline {
    agent any

    triggers {
        pollSCM('* * * * *')
    }

    environment {
        DEPLOY_DIR = "${env.HOME}/deploy/exp3-app"
        APP_PORT   = '3001'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'node --version && npm --version'
                sh 'npm run build'
                sh 'ls -l dist'
            }
        }
        stage('Test') {
            steps {
                echo 'Running unit tests...'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                sh '''
                    mkdir -p "$DEPLOY_DIR"
                    cp -r dist/* "$DEPLOY_DIR"/
                    cd "$DEPLOY_DIR"
                    if [ -f app.pid ]; then kill $(cat app.pid) 2>/dev/null || true; fi
                    JENKINS_NODE_COOKIE=dontKillMe PORT=$APP_PORT nohup node app.js > app.log 2>&1 &
                    echo $! > app.pid
                    sleep 2
                    curl -s http://localhost:$APP_PORT | grep "<h1>"
                '''
            }
        }
    }

    post {
        success { echo 'Pipeline completed: Build, Test and Deploy succeeded.' }
        failure { echo 'Pipeline failed.' }
    }
}
