interface IUserEmailTemplate {
  themeColor: string;
  domain: string;
  senderName: string;
}

const UserEmailTemplate = ({
  domain,
  senderName,
  themeColor,
}: IUserEmailTemplate) => `<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Thank you!</title>
<style>
  @media only screen and (max-width: 600px) {
    .footerContainer {
      flex-direction: column-reverse;
    }

    .footerRightContainer {
      margin-left: unset !important;
      margin-bottom: 4px;
    }

    .footerLeftContainer {
      justify-content: center;
      align-items: center;
    }

    .headerContainer {
      flex-direction: column;
      justify-content: center;
    }
  }
</style>
</head>

<body>
<div class="mainContainer"
  style="max-width: 650px;max-height: 700px;min-height: 300px;color: ${themeColor};margin: auto;">
  <div class="headerContainer"
    style="background-color: rgb(33, 37, 41);height: 56px;padding: 8px 16px;display: flex;border-bottom: 1px solid;">
    <span class="headerText" style="font-size: 24px;margin-top: auto;margin-bottom: auto;">
     Congratulations!!
    </span>

    <span class="headerText2" style="margin-left: auto;margin-top: auto;margin-bottom: 4px;">
      <a style="text-decoration: none; color: unset;" href="https://${domain}">
        ${domain}
      </a>
    </span>

  </div>
  <div class="bodyContainer" style="color:white;padding: 16px;flex-grow: 1;background-color:rgb(33, 37, 41);">
    <div class="mainText" style="font-weight: bolder;margin-bottom: 16px;">I have received your query. Thank you for getting in touch.</div>
    <div>I appreciate you contacting me. I will get back in touch with you soon!
      <br>
      Have a great day!</div>
    <div>

    </div>
  </div>
  <div class="footerContainer"
    style="background-color: rgb(33, 37, 41);min-height: 56px;padding: 8px 16px;display: flex;align-items: center;justify-content: flex-end;border-top: 1px solid;">
    <div class="footerLeftContainer" style="display: flex;margin:auto;">
      <span class="footerText2" style="color: white;font-size: 14px;">
        All right reserved ${senderName} @ 2023
      </span>
    </div>
  </div>
</div>
</body>

</html>`;

export default UserEmailTemplate;
