@Vetri
Feature: VetrivelB_07-07-2026_Course_Structure_Pagination

    Background:
        Given Admin on the Dashboard Page after Login
        And Admin navigate to Course Management Page

  @Navigation
  Scenario Outline: Verify user can navigate using pagination buttons
    Given the user is on the "<currentPage>" page of the Course Structure table
    When the user clicks the "<button>" button
    Then the user should be navigated to the "<expectedPage>" page

    Examples:
      | currentPage | button | expectedPage |
      | 1 | Next | 2 |
      | 2 | Previous | 1 |

  @PageNumberNavigation
  Scenario Outline: Verify user can navigate to a specific page using the page number
    Given the user is on the Course Structure table
    When the user clicks page number "<pageNumber>"
    Then the user should be navigated to the "<pageNumber>" page

    Examples:
      | pageNumber |
      | 2          |
      | 9          |

  @ButtonDisablity
  Scenario Outline: Verify appropriate button is disabled on the page
    Given the user is on the "<page>" page of the Course Structure table
    Then the "<direction>" button should be disabled

    Examples:
        | page | direction | 
        | first | previous |
        | last | next |
 