


if [[ "$OSTYPE" == "msys" ]]; then

    # Windows git-bash
    
	expo start | node buildFilter.js
    
#elif [[ "$OSTYPE" == "darwin"* ]]; then

    # Mac OSX
	

#elif [[ "$OSTYPE" == "cygwin" ]]; then
    #echo ""
#elif [[ "$OSTYPE" == "linux-gnu" ]]; then
        
#elif [[ "$OSTYPE" == "win32" ]]; then
        # I'm not sure this can happen.
#elif [[ "$OSTYPE" == "freebsd"* ]]; then
        # ...
else
    echo "Unknown os: " + $OSTYPE
fi