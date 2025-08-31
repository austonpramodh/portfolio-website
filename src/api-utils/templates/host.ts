interface IHostEmailTemplate {
    themeColor: string;
    domain: string;
    name: string;
    message: string;
    contact: string;
    senderName: string;
}

const HostEmailTemplate = ({
    domain,
    name,
    themeColor,
    contact,
    message,
    senderName,
}: IHostEmailTemplate) => `<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Someone tried contacting you!!</title>
  <style>
    @media only screen and (max-width: 600px) {
      .footerContainer {
        flex-direction: column-reverse;
      }

      .footerRightContainer {
        margin-left: unset;
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
    style="max-width: 650px;max-height: 700px;min-height: 300px;margin:auto;">
    <div class="headerContainer"
      style="background-color: rgb(33, 37, 41);height: 56px;padding: 8px 16px;color: ${themeColor};margin:auto;display:flex;">
      <span class="headerText" style="font-size: 24px;margin-top: auto;margin-bottom: auto;">
        Knock knock!
      </span>

      <span class="headerText2" style="margin-left: auto;margin-top: auto;margin-bottom: 4px;">
        <a style="text-decoration: none; color: unset;" href="https://${domain}">
          ${domain}
        </a>
      </span>

    </div>
    <div class="bodyContainer" style="padding: 16px;flex-grow: 1;background-color: rgba(0, 0, 0, 0.05);">
      <div class="mainText" style="font-weight: bolder;margin-bottom: 16px;">Someone tried contacting you.</div>
      <div>
        <div class="contentRow" style="display: flex;">
          <span class="contentSubtitle" style="font-weight: bold;">Name:</span>&nbsp;<span>${name}</span>
        </div>
        <div class="contentRow" style="display: flex;">
          <span class="contentSubtitle" style="font-weight: bold;">Contact:</span>&nbsp;<span>${contact}</span>
        </div>
        <div class="contentRow" style="display: flex;">
          <span class="contentSubtitle" style="font-weight: bold;">Message:</span>&nbsp;<span>${message}</span>
        </div>
      </div>
    </div>
    <div class="footerContainer"
      style="background-color: rgb(33, 37, 41);min-height: 56px;padding: 8px 16px;color: white;display: flex;">
      <span class="footerText" style="margin:auto;">
        All right reserved | ${senderName} @ ${new Date().getFullYear()}
      </span>
    </div>
  </div>
</body>

</html>`;

export default HostEmailTemplate;
