Feature("isi IRS");

const username = "";
const password = "";

Scenario("isi IRS", ({ I }) => {
  I.amOnPage("/");

  I.seeElement('[name="u"]');

  I.fillField(locate('[name="u"]').first(), username);
  I.fillField(locate('[name="p"]').first(), password);

  I.click(locate("#submit input").first());
  I.waitForResponse("https://academic.ui.ac.id/main/Authentication/Index");
  I.waitForResponse("https://academic.ui.ac.id/main/Welcome/");
  I.seeElement('[href="../CoursePlan/CoursePlanAdd">]');
});
