FROM cypress/included:12.16.0 AS build
WORKDIR /app
COPY . ./

RUN npm install

FROM build AS test
LABEL testSuiteTests=${LABEL}
RUN cypress run --env password=${xxxxxxxx},dbpassword=${xxxxxxxx}; exit;
