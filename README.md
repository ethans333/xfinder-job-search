# X finder 🔎

Web application for experts in industries looking for contract work. Fight the problems of "age-ism".

## Services

### DevOps

- AWS EKS: For hosting containers
- Github: Project storage and source control
- Github Actions: CI/CD Pipeline
- Terraform: All in one deployment of services

## Development

### Running the Frontend Service

In `/frontend`:

```bash
npm run dev
```

### Running The Backend Services

In `/`:

```bash
docker compose up --build
```

## Run Services In Minikube Cluster

Enter minikube env:

```sh
minikube start
eval $(minikube docker-env)
```

Build containers:

```sh
kubectl apply -f ./k8s/ --recursive
```

Serving on:

```python
http://<minikube-ip>:80/
```

### Updating Schema Version

Within `/venv`:

```bash
alembic revision --autogenerate -m "describe your change"
alembic upgrade head
```
