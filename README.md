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


# Some bugs observation based on the first round of testing:
1. Count patches mismatching actual patches. 
2. Data with patches from the previous run, override the next run result.
3. Service returning 500 instead of 400 with payload with empty keys.
4 According to the specification of the coordinate identifier (location defined by identifying the bottom left corner of grid positions), the actual room size must be [4,4] instead of  [5,5].
