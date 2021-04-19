# Jean Ruckgaber Website

## How to develop
This is a [NextJS](https://nextjs.org/) appliction. To run the local development environment: 

* `git clone`
* `npm install`
* `npm run dev`


## Building

A production build of the application can be produced by: 

* Run `npm run build` to build the app
* Export to a standalone folder `npm run export`

## CI / CD Configuration
CI/CD Pipeline will use [Github Actions](https://github.com/features/actions) to build the app and deploy it:

* Deploy to a Firebase temp channel on PR.
* Deploy to the Firebase live channel on merge to `master`.
