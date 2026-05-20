import { Component } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorProvider } from "@/core/context/error/ErrorProvider.jsx";
import AppRoutes from "@/core/config/routes/Routes.jsx";
import log from "@/core/logger/logger";
import "./error-boundary.css";

const queryClient = new QueryClient();

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    log.error("ErrorBoundary caught error", error, {
      feature: "error-boundary",
      componentStack: errorInfo.componentStack,
    });
  }

  handleReset = () => {
    if (this.props.onReset) {
      this.props.onReset();
    }
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <div className="error-boundary-content">
            <h2>Oops! Algo deu errado</h2>
            <p className="error-message">{this.state.error?.message}</p>
            <div className="error-actions">
              <button onClick={this.handleReset} className="btn-primary">
                Tentar Novamente
              </button>
              <button onClick={() => window.location.reload()} className="btn-secondary">
                Recarregar Página
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
