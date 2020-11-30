FROM scratch

COPY static/styles.css /static/
COPY static/script.js /static
COPY static/alarm.wav /static/
COPY static/index.html /static/

COPY aircare /

EXPOSE 8000

CMD ["/aircare"]
