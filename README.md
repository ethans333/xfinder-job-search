# x finder 🔎

Web application for experts in industries looking for contract work. Fight the problems of "age-ism".

## Services

### DevOps

- AWS EKS: For hosting containers
- Github: Project storage and source control
- Github Actions: CI/CD Pipeline
- Terraform: All in one deployment of services

### Frontend

- NGINX: Running Vite

### Backend

- PostgreSQL: Running Postgres
- Python Container: Running Flask for API

### Containers

### Containers

| Container Type      | Description                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------- |
| NGINX 🔥            | Frontend web server. Will run with Vite for deployment and Tailwind and ShadCN libraries for GUI design. |
| PostgreSQL 🐘       | Backend database.                                                                                        |
| Python Container 🐍 | Backend API. Will connect frontend to backend using the Flask library.                                   |

### Database Tables

- Users
- Job Postings
- Companies

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

## Personal Notes 📝

### Action Items

Need to migrate data and schema within CI/CD pipeline so that changes to database are in sync with development. Need to implement authentication within API, should probably use JWT or event login with google.

### Virtual Private Cloud (VPC)

An isolated private network within a public cloud. Provides isolation and security.

It's your private network within AWS. It isolates your project from other projects you have and other AWS customers.

A VPC provides your EKS cluster with a

- Internal IP Address
- Network segmentation (subnets, routing)
- Fire walls

This is where your cluster runs. EKS doesn't create networking for you. It's like the home to your cluster.

### Subnets

A line of communication within your VPC. Each subnet has its own range of IP addresses.

Types of subnets:

- Public: Has a route to the internal gateway so ec2 instances can access the internet directly.
- Private: No direct internet access. A NAT Gateway is used to access the internet.
- Isolated: No internet access at all. Great for security critical resources.

You might want to use a public subnet for services like web servers or an API gateway.

You might want to use a private subnet for something like a backend application or an internal microservice.

### CIDR block (Classless Inter-Domain Routing block)

Defines a range of IP addresses to that get used in your subnet. The subnets are the slices of your CIDR block.

Example:

```
10.0.0.0/16
```

Network starts at `10.0.0.0`.
The `/16` means the first 16 bits are fixed as the network part.
The rest (16 bits) are for assigning to hosts (IP addresses).

So this supports:

```
10.0.0.0 to 10.0.255.255
```

### NAT Gateway

Allows resources in a private subnet to access the internet without be accessible from the internet itself.
