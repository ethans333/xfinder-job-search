variable "region" {
  default     = "us-east-1"
  description = "AWS region"
}

variable "cluster_name" {
  default = "my-eks-cluster"
}

variable "github_repo" {
  type        = string
  description = "GitHub repository (format: org/repo)"
  default     = "ethans333/xfinder-job-search"
}

variable "github_branch" {
  type        = string
  description = "GitHub branch to allow (e.g. main)"
  default     = "master"
}
