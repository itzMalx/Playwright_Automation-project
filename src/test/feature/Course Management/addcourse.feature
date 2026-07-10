@Shobana
Feature: Shobana_07-07-2026_Add course functionality

     Background:
          Given Admin on the Dashboard Page after Login
          And Admin navigate to Course Management Page

     Scenario: Add course with valid details

          When User selects valid course configuration details
          And User clicks the Next button
          When User selects the details in course hirearchy and layout
          And User clicks Preview and Create
          And User saves the course layout
          Then The course should be created successfully
     
     Scenario: Add course with valid details 

          When User selects valid course configuration details
          And User clicks the Next button
          When User selects the details in course hirearchy and layout with uploading image
          And User clicks Preview and Create
          And User saves the course layout
          Then The course should be created successfully

     

   
     Scenario: Add course with invalid details without selecting client in course configuration
          When User selects valid course configuration details without selecting client
          And User clicks the Next button
          Then User should get error message
    
     Scenario: Add course with invalid details without selecting service model in course configuration
          When User selects valid course configuration details without selecting service model
          And User clicks the Next button
          Then User should get error message select service model
    
     Scenario: Add course with invalid details without selecting hirearchy and resource type in course hirearchy and layout
          When User selects valid course configuration details
          And User clicks the Next button
          When User selects the details in course hirearchy and layout without selecting hirearchy and resource type
          And User clicks Preview and Create
          Then User should get error message select hirearchy and resource type


