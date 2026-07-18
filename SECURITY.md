# Security policy

## Supported version

Security fixes target the `master` branch and the current deployment linked
from the README. Historical commits and modified deployments are not supported
separately.

## Reporting a vulnerability

Please use [GitHub's private vulnerability reporting form](https://github.com/okturan/esti.mate/security/advisories/new)
instead of opening a public issue. Include the affected URL or input, clear
reproduction steps, the browser you tested, and the impact you expect.

This is a static, client-side calculator. Useful reports include:

- script or markup injection through a calculator field or rendered result;
- a calculation input that crosses a browser security boundary rather than
  merely producing an incorrect estimate;
- exposure or transmission of entered project data despite the documented
  browser-only model;
- a dependency, test, or deployment weakness with a demonstrated impact.

Incorrect arithmetic, rounding disagreements, accessibility defects, and
business-rate assumptions are normal bug reports unless they enable a security
boundary to be crossed. The calculator is an estimating aid and does not handle
payments or create binding quotes.

Use synthetic project figures and do not attach confidential client estimates,
credentials, or destructive payloads. The maintainer will coordinate
validation, remediation, and disclosure through the private advisory.
