#!/bin/bash

for i in `cat adjectives.txt`; do
    echo -n "\"${i::-1}\", "
done

