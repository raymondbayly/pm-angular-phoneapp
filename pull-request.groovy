#!/usr/bin/env groovy
pipeline {
    agent {
        label 'build-java11'
    }
    tools {
        nodejs 'nodejs-10.15.3'  // Tool name from Jenkins Global Tool configuration
    }
    stages {
        stage('Install Dependencies') {
            steps {
            	script {
                    currentBuild.description = "Pull Request Name: ${CHANGE_TITLE}"
                }
                nodejs(nodeJSInstallationName: 'nodejs-10.15.3', configId: 'jenkins-npmrc') {
                    sh 'npm install'
                }
            }
        }
        stage('Lint') {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs-10.15.3', configId: 'jenkins-npmrc') {
                    sh 'npm run lint'
                }
            }
        }
        stage ('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs-10.15.3', configId: 'jenkins-npmrc') {
                    sh 'npm run build'
                }
            }
        }
    }
}