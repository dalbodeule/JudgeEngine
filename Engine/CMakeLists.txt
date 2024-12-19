cmake_minimum_required(VERSION 3.22.0)

project(JudgeEngine C CXX)

set(CMAKE_CXX_STANDARD 17)

find_package(OpenSSL REQUIRED)
if (OPENSSL_FOUND)
  message(STATUS "Found OpenSSL ${OPENSSL_VERSION}")
else()
  message(STATUS "OpenSSL Not Found")
endif()

add_executable(${PROJECT_NAME}
    main.cpp
)

target_link_libraries(${PROJECT_NAME}
    PUBLIC
)

