# Proyecto Adoptme - Backend 3 - Liana Manucharyan

Este proyecto es el backend de Adoptme, una aplicación para adopción de mascotas.

---

## Imagen Docker en Docker Hub

La imagen del proyecto está disponible públicamente en Docker Hub:

[https://hub.docker.com/repository/docker/lianamanucharyan403/adoptme-app](https://hub.docker.com/repository/docker/lianamanucharyan403/adoptme-app)

Puedes descargarla con:

```bash
docker pull lianamanucharyan403/adoptme-app:latest
```

---

## Instrucciones para usar Docker

### Construir la imagen localmente

```bash
docker build -t lianamanucharyan403/adoptme-app .
```

### Ejecutar el contenedor

```bash
docker run -p 8080:8080 lianamanucharyan403/adoptme-app
```

Esto expondrá la aplicación en `http://localhost:8080`.

---

## Uso del proyecto

- El backend está desarrollado con Node.js y Express.
- Puedes probar la API accediendo a `http://localhost:8080`.
- Para desarrollo local, utiliza el siguiente script:

```bash
npm run dev
```

---

## Dependencias principales

- bcrypt
- express
- mongoose
- jsonwebtoken
- multer
- swagger-jsdoc
- swagger-ui-express

---

## Licencia

ISC
