# Test Assignment


### Clone test repository
```sh
git clone https://github.com/startdrift/test_assignment.git
```
### Install dependencies
```sh
yarn
```
### Clone service repository
```sh
git clone https://bitbucket.org/platformscience/pltsci-sdet-assignment.git
```
### Build service
```sh
sudo chmod +x service/run.sh
docker build -t pltsci-sdet-assignment service
```
### Run service
```sh
docker run -d -p 8080:8080 --name pltsci-sdet-assignment pltsci-sdet-assignment
```
### Run test
```sh
yarn test
```
