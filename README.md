# Demo Video
[![Video Title](https://img.youtube.com/vi/Ilmh0FQ7i_Q/0.jpg)](https://youtu.be/Ilmh0FQ7i_Q)



# ONDC Routing Backend

![image](https://github.com/anujrmohite/BuildforBharatONDC/assets/40718422/42c3b8ae-93e8-4ddc-88fd-a89c0a16893b)

## Routing

![implementation1](https://github.com/anujrmohite/BuildforBharatONDC/assets/40718422/46ebc15a-2407-48b6-950f-8b9c77af5e67)

## Polygon Mapping > DISTRICT > SUB DISTRICT

![implementation2](https://github.com/anujrmohite/BuildforBharatONDC/assets/40718422/cd76f113-1b2e-46db-967e-0289de1ffc1d)

## Dependencies

Before installing OSRM, ensure that the following dependencies are installed on your system:

- build-essential
- git  
- cmake
- pkg-config
- libbz2-dev  
- libxml2-dev
- libzip-dev 
- libboost-all-dev
- lua5.2
- liblua5.2-dev

You can install these dependencies on Debian-based systems using:

```
sudo apt install build-essential git cmake pkg-config \\
libbz2-dev libxml2-dev libzip-dev libboost-all-dev \\ 
lua5.2 liblua5.2-dev libtbb-dev
```

## Installation Steps

1. Clone the OSRM backend repository:

```
git clone https://github.com/Project-OSRM/osrm-backend.git
```

2. Navigate to the repository directory:

```  
cd osrm-backend
```

3. Download the OSM data for Goa, India:

```
wget https://download.geofabrik.de/asia/india/goa-latest.osm.pbf 
```

4. Create build directory:

```
mkdir -p build  
cd build
```

5. Generate build files:

```
cmake .. 
```

6. Build binaries:

```
cmake --build .
``` 

7. Install OSRM:

```
sudo cmake --build . --target install
```

## Data Processing  

8. Extract Goa data:

```
osrm-extract goa.osm.pbf -p profiles/car.lua
```

9. Partition:

```
osrm-partition goa.osrm  
```

10. Customize:

```
osrm-customize goa.osrm
```

11. Contract: 

```
osrm-contract goa.osrm
```

## Frontend

```
npm install
npm start
```
