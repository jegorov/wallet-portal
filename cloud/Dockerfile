FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
COPY wallet-portal /usr/share/nginx/html/wallet-portal
COPY nginx.conf /etc/nginx/nginx.conf
COPY run.sh /run.sh

RUN chmod -R a+rwX /var/cache/nginx /var/run /var/log/nginx
RUN chmod 777 /run.sh
RUN chmod a+rwX /etc/nginx/nginx.conf

EXPOSE 8082

CMD ./run.sh
