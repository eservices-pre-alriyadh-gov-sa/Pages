//<![CDATA[
    var RS;
    var RSTelemetry;

    if (RS && RS.Telemetry) {
        try {
            RSTelemetry = new RS.Telemetry({"Host":"Microsoft.ReportViewer.WebForms","Build":"14.0.340.80","HashedUserId":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855","HashedAppSite":"A26BB35EF9EF8CA0CAFB0A75BE902552DE887662DBD45AC3CC053FA4D62C0C66","HashedAppPath":"AA511FBAD8C77D2C1D327AB475B6DE293E42AD9EC01825EFEEE78E6E48554900"});
        } catch (exception) {
            console.log(exception);
        }
    }
    if (RS && RS.Telemetry) {
        try {
            RSTelemetry.trackPageView({"HashedRvcId":"A8C4744183076889CD79950339A3EDE0AB7250D4D0E0FBFE43F0D369719D015F","ProcessingMode":"Remote","HashedInstanceId":"B6E94BA82F85EAE2AED46A024BDBCEF1BDED98134C1E6E2E9BDA8D317E2477D7"});
        } catch (exception) {
            console.log(exception);
        }
    }
//]]>